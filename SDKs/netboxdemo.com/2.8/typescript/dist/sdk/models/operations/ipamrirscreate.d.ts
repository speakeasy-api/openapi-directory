import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamRirsCreateResponse extends SpeakeasyBase {
    contentType: string;
    rir?: shared.Rir;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
