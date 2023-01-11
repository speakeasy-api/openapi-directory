import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGeneTypeCountUsingGetPathParams extends SpeakeasyBase {
    dateYYYYMMDD: string;
    speciesTypeKey: number;
}
export declare class GetGeneTypeCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGeneTypeCountUsingGetPathParams;
}
export declare class GetGeneTypeCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
