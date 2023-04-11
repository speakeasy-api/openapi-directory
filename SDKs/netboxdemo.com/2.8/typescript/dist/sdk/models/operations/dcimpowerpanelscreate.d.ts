import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerPanelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    powerPanel?: shared.PowerPanel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
