import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const GetRadiodnsSpi31SIXmlServerList: readonly ["/", "https://radiodns.prss.org", "https://radiodnsstage.prss.org", "https://radiodnsdev.mgmt.prss.org"];
export declare class GetRadiodnsSpi31SIXmlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The service information document is returned in the body of the response.
     */
    getRadiodnsSpi31SIXML200ApplicationXMLRadioDNSServiceInformationSIAsDefinedInETSITS102818V341HttpsWwwETSIOrgDeliverETSITS10280010289910281803040160TS102818v030401pPdfSection6String?: string;
}
