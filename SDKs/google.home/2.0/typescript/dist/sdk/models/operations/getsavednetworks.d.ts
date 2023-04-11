import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSavedNetworksResponse extends SpeakeasyBase {
    contentType: string;
    example113s?: shared.Example113[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
