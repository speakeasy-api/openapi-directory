import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for rollbacking a notebook instance
 */
export declare class RollbackInstanceRequest extends SpeakeasyBase {
    /**
     * Required. The snapshot for rollback. Example: `projects/test-project/global/snapshots/krwlzipynril`.
     */
    targetSnapshot?: string;
}
