import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmPartialImportRequest extends SpeakeasyBase {
    partialImportRepresentation: shared.PartialImportRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmPartialImportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
