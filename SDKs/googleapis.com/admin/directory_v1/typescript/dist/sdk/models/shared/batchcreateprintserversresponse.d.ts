import { SpeakeasyBase } from "../../../internal/utils";
import { PrintServer } from "./printserver";
import { PrintServerFailureInfo } from "./printserverfailureinfo";
/**
 * Successful response
 */
export declare class BatchCreatePrintServersResponse extends SpeakeasyBase {
    /**
     * A list of create failures. `PrintServer` IDs are not populated, as print servers were not created.
     */
    failures?: PrintServerFailureInfo[];
    /**
     * A list of successfully created print servers with their IDs populated.
     */
    printServers?: PrintServer[];
}
