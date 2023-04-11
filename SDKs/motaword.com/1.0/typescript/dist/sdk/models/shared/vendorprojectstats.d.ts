import { SpeakeasyBase } from "../../../internal/utils";
export declare class VendorProjectStats extends SpeakeasyBase {
    /**
     * total number of projects that this user was invited to. TODO this key is to replace "total" key due to naming ambiguity.
     */
    invited?: number;
    /**
     * total number of projects that this user was invited to.
     */
    total?: number;
    /**
     * total number of projects that this user actually worked on.
     */
    worked?: number;
}
