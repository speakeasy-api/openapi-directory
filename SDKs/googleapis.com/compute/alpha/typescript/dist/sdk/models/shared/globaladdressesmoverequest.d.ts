import { SpeakeasyBase } from "../../../internal/utils";
export declare class GlobalAddressesMoveRequest extends SpeakeasyBase {
    /**
     * An optional destination address description if intended to be different from the source.
     */
    description?: string;
    /**
     * The URL of the destination address to move to. This can be a full or partial URL. For example, the following are all valid URLs to a address: - https://www.googleapis.com/compute/v1/projects/project /global/addresses/address - projects/project/global/addresses/address Note that destination project must be different from the source project. So /global/addresses/address is not valid partial url.
     */
    destinationAddress?: string;
}
