import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsAllAverageFixTime200ApplicationJsonResults extends SpeakeasyBase {
    high?: number;
    low?: number;
    medium?: number;
}
export declare class GetTargetsAllAverageFixTime200ApplicationJson extends SpeakeasyBase {
    results?: GetTargetsAllAverageFixTime200ApplicationJsonResults;
}
export declare class GetTargetsAllAverageFixTimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsAllAverageFixTime200ApplicationJSONObject?: GetTargetsAllAverageFixTime200ApplicationJson;
}
