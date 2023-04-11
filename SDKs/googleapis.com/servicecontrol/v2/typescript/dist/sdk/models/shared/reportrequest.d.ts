import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeContext } from "./attributecontext";
/**
 * Request message for the Report method.
 */
export declare class ReportRequest extends SpeakeasyBase {
    /**
     * Describes the list of operations to be reported. Each operation is represented as an AttributeContext, and contains all attributes around an API access.
     */
    operations?: AttributeContext[];
    /**
     * Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration.
     */
    serviceConfigId?: string;
}
