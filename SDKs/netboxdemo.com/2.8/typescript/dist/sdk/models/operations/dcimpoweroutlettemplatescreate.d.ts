import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerOutletTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    powerOutletTemplate?: shared.PowerOutletTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
