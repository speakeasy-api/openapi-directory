import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRadiodnsSpi31GIXmlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The group information document is returned in the body of the response.
     */
    getRadiodnsSpi31GIXML200ApplicationXMLRadioDNSGroupInformationGIAsDefinedInETSITS102818V341HttpsWwwETSIOrgDeliverETSITS10280010289910281803040160TS102818v030401pPdfSection8String?: string;
}
