import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RestoreDomainRequest is the request received by RestoreDomain rpc
 */
export declare class RestoreDomainRequest extends SpeakeasyBase {
    /**
     * Required. ID of the backup to be restored
     */
    backupId?: string;
}
