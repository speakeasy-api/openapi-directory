import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
/**
 * Java type: com.noosh.nooshapi.vo.ClientWorkgroupDetailVO
 */
export declare class ClientWorkgroupDetailVO extends SpeakeasyBase {
    clientAcWorkgroupId?: number;
    clientWorkgroupId?: number;
    clientWorkgroupName?: string;
    customFields?: PropertyPaAndAttVO[];
    /**
     * Java type: java.math.BigDecimal
     */
    marginPercent?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    markup?: any;
    /**
     * Java type: java.math.BigDecimal
     */
    markupPercent?: any;
}
