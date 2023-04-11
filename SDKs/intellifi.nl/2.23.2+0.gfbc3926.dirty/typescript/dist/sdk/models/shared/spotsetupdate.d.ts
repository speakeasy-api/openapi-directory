import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object containing spotset information
 */
export declare class SpotSetUpdate extends SpeakeasyBase {
    /**
     * Request to delete a set. Remove request needs to be synchronized to the device, so it may take some time before the resource is being removed.
     */
    delete?: boolean;
}
