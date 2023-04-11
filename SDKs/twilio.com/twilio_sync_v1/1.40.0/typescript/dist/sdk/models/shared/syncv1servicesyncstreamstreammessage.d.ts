import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class SyncV1ServiceSyncStreamStreamMessage extends SpeakeasyBase {
    /**
     * An arbitrary, schema-less object that contains the Stream Message body. Can be up to 4 KiB in length.
     */
    data?: any;
    /**
     * The unique string that we created to identify the Stream Message resource.
     */
    sid?: string;
}
