import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimInterfaceTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    interfaceTemplate?: shared.InterfaceTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
