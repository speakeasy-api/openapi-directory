import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for resources used by Airflow web server.
 */
export declare class WebServerResource extends SpeakeasyBase {
    /**
     * Optional. CPU request and limit for Airflow web server.
     */
    cpu?: number;
    /**
     * Optional. Memory (GB) request and limit for Airflow web server.
     */
    memoryGb?: number;
    /**
     * Optional. Storage (GB) request and limit for Airflow web server.
     */
    storageGb?: number;
}
