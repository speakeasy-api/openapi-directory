import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetXdbsDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYYYYMMDD: string;
    dateToYYYYMMDD: string;
    speciesTypeKey: number;
}
export declare class GetXdbsDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetXdbsDiffUsingGetPathParams;
}
export declare class GetXdbsDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
