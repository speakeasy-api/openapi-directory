import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetObjectsWithRefSeqCountUsingGetPathParams extends SpeakeasyBase {
    dateYYYYMMDD: string;
    speciesTypeKey: number;
}
export declare class GetObjectsWithRefSeqCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetObjectsWithRefSeqCountUsingGetPathParams;
}
export declare class GetObjectsWithRefSeqCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
