import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetObjectStatusDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYYYYMMDD: string;
    dateToYYYYMMDD: string;
    speciesTypeKey: number;
}
export declare class GetObjectStatusDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetObjectStatusDiffUsingGetPathParams;
}
export declare class GetObjectStatusDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
