import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatorsReadRequest extends SpeakeasyBase {
    id: string;
}
export declare class CreatorsReadResponse extends SpeakeasyBase {
    contentType: string;
    personSingle?: shared.PersonSingle;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
