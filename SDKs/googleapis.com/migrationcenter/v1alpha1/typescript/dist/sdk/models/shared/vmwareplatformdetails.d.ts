import { SpeakeasyBase } from "../../../internal/utils";
/**
 * VMware specific details.
 */
export declare class VmwarePlatformDetails extends SpeakeasyBase {
    /**
     * ESX version.
     */
    esxVersion?: string;
    /**
     * VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html.
     */
    osid?: string;
    /**
     * vCenter version.
     */
    vcenterVersion?: string;
}
