import { SpeakeasyBase } from "../../../internal/utils";
import { VmCreationConfig } from "./vmcreationconfig";
import { VmSelectionConfig } from "./vmselectionconfig";
/**
 * Request message for 'GenerateSshScript' request.
 */
export declare class GenerateSshScriptRequest extends SpeakeasyBase {
    /**
     * Required. Bastion VM Instance name to use or to create.
     */
    vm?: string;
    /**
     * VM creation configuration message
     */
    vmCreationConfig?: VmCreationConfig;
    /**
     * The port that will be open on the bastion host
     */
    vmPort?: number;
    /**
     * VM selection configuration message
     */
    vmSelectionConfig?: VmSelectionConfig;
}
