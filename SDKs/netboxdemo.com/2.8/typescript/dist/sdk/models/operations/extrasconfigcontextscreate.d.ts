import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasConfigContextsCreateResponse extends SpeakeasyBase {
    configContext?: shared.ConfigContext;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
