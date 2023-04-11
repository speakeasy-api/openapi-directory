import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const GetRadiodnsSpi31IdFqdnSidDatePIXmlServerList: readonly ["/", "https://radiodns.prss.org", "https://radiodnsstage.prss.org", "https://radiodnsdev.mgmt.prss.org"];
export declare class GetRadiodnsSpi31IdFqdnSidDatePIXmlRequest extends SpeakeasyBase {
    /**
     * The PI schedule date to retrieve in format yyyymmdd.
     */
    date: string;
    /**
     * The fully qualified domain name for the environment where the service is running. The fqdn is defined in the `radiodns` element in the SI document in each Content Depot environment.
     */
    fqdn: string;
    /**
     * One of the valid service IDs defined in the SI document. For example, "files" or "streams".
     */
    sid: string;
    /**
     * The API client Id you received. This is required for National PI documents, but not Station PI documents. Contact help desk if you need one.
     */
    xRadiodnsspiApiKey?: string;
}
export declare class GetRadiodnsSpi31IdFqdnSidDatePIXmlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Program information document for the given 24 hour period.
     */
    getRadiodnsSpi31IdFqdnSidDatePIXML200ApplicationXMLRadioDNSProgramInformationPIAsDefinedInETSITS102818V341HttpsWwwETSIOrgDeliverETSITS10280010289910281803040160TS102818v030401pPdfSection7String?: string;
}
