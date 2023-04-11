import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AreasGetRequest extends SpeakeasyBase {
    version: string;
}
export declare class AreasGetResponse extends SpeakeasyBase {
    areaResponse?: shared.AreaResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
