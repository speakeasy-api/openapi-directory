import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimInterfaceTemplatesUpdateRequest extends SpeakeasyBase {
    writableInterfaceTemplateInput: shared.WritableInterfaceTemplateInput;
    /**
     * A unique integer value identifying this interface template.
     */
    id: number;
}
export declare class DcimInterfaceTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    interfaceTemplate?: shared.InterfaceTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
