import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPedigreeRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetPedigreeResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
