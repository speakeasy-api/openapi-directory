import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1InstanceActivityResponse extends SpeakeasyBase {
    /**
     * Domains that this instance is aware of.
     */
    activities?: shared.Activity[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
