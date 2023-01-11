import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsAllNeedsAttentionTop200ApplicationJson extends SpeakeasyBase {
    highs?: number;
    id?: string;
    lows?: number;
    mediums?: number;
    name?: string;
    url?: string;
}
export declare class GetTargetsAllNeedsAttentionTopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsAllNeedsAttentionTop200ApplicationJSONObjects?: GetTargetsAllNeedsAttentionTop200ApplicationJson[];
}
