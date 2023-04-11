import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientDescriptionConverterRequest extends SpeakeasyBase {
    requestBody: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientDescriptionConverterResponse extends SpeakeasyBase {
    /**
     * success
     */
    clientRepresentation?: shared.ClientRepresentation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
