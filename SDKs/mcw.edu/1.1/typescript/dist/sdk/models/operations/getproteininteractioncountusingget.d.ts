import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProteinInteractionCountUsingGetPathParams extends SpeakeasyBase {
    dateYYYYMMDD: string;
    speciesTypeKey: number;
}
export declare class GetProteinInteractionCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetProteinInteractionCountUsingGetPathParams;
}
export declare class GetProteinInteractionCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
