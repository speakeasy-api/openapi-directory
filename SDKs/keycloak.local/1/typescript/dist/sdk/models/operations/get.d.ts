import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    serverInfoRepresentation?: shared.ServerInfoRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
