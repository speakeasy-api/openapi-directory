import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LegalNoticeResponse extends SpeakeasyBase {
    contentType: string;
    legalNotice200TextPlainString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
