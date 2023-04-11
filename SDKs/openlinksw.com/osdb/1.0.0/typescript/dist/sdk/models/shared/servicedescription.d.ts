import { SpeakeasyBase } from "../../../internal/utils";
export declare class ServiceDescription extends SpeakeasyBase {
    /**
     * A short description of the service.
     */
    description?: string;
    /**
     * The URI of the source service description document used to load the service into OSDB.
     */
    importSourceUri: string;
    /**
     * A unique one word identifier for the service.
     */
    serviceId: string;
    /**
     * A word or phrase naming the service.
     */
    serviceName: string;
}
