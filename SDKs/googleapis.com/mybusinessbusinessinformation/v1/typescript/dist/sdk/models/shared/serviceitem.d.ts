import { SpeakeasyBase } from "../../../internal/utils";
import { FreeFormServiceItem } from "./freeformserviceitem";
import { Money } from "./money";
import { StructuredServiceItem } from "./structuredserviceitem";
/**
 * A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.
 */
export declare class ServiceItem extends SpeakeasyBase {
    /**
     * Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.
     */
    freeFormServiceItem?: FreeFormServiceItem;
    /**
     * Represents an amount of money with its currency type.
     */
    price?: Money;
    /**
     * Represents a structured service offered by the merchant. For eg: toilet_installation.
     */
    structuredServiceItem?: StructuredServiceItem;
}
