import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIdentifierMapperRequest extends SpeakeasyBase {
    source: string;
    target: string;
}
export declare class GetIdentifierMapperResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
