import { SpeakeasyBase } from "../../../internal/utils";
/**
 * These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
 *
**/
export declare class GetTargetsAllNeedsAttentionPie200ApplicationJson0 extends SpeakeasyBase {
    zero?: string;
    one?: number;
    two?: string;
}
/**
 * These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
 *
**/
export declare class GetTargetsAllNeedsAttentionPie200ApplicationJson1 extends SpeakeasyBase {
    zero?: string;
    one?: number;
    two?: string;
}
export declare class GetTargetsAllNeedsAttentionPie200ApplicationJson extends SpeakeasyBase {
    zero?: GetTargetsAllNeedsAttentionPie200ApplicationJson0;
    one?: GetTargetsAllNeedsAttentionPie200ApplicationJson1;
}
export declare class GetTargetsAllNeedsAttentionPieResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsAllNeedsAttentionPie200ApplicationJSONObject?: GetTargetsAllNeedsAttentionPie200ApplicationJson;
}
