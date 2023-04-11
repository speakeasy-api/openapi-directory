import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Instance get disk shrink config response.
 */
export declare class SqlInstancesGetDiskShrinkConfigResponse extends SpeakeasyBase {
    /**
     * This is always `sql#getDiskShrinkConfig`.
     */
    kind?: string;
    /**
     * The minimum size to which a disk can be shrunk in GigaBytes.
     */
    minimalTargetSizeGb?: string;
}
