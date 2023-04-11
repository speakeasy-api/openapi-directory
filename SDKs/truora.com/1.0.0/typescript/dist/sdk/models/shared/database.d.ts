import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a database as well as an hourly status
 */
export declare class Database extends SpeakeasyBase {
    /**
     * List of data sets fed by the database. It can contain ``affiliations_and_insurances``, ``alert_in:media``, ``business_background``, ``criminal_record``, ``driving_licenses``, ``international_background``, ``legal_background``, ``personal_identity``, ``permiso_de_circulación_covid-19``, ``professional_background``, ``traffic_fines``, ``vehicle_information``, ``vehicle_permits``, ``behaviour_and_reputation``, or ``taxes_and_finances``
     */
    dataSets?: string[];
    /**
     * Database identifier
     */
    databaseId?: string;
    /**
     * Database name. Do not use this field to identify the database as it might change, use database_id instead
     */
    databaseName?: string;
    /**
     * An hourly list of the database statuses. The ``operational`` status means the database executions were at least 90% successful, ``degraded_performance`` means the database executions were from 50 to 90% successful, ``partial_outage`` means the database executions were from 10 to 50% sucessful, ``major_outage`` means the database executions were under 10% successful. ``under_maintenance`` means the database is temporarily out of service for maintenance, ``deprecated`` means the database is permanently out of service, ``undetermined`` means there was no enough data to assess the database status
     */
    hourlyStatus?: string[];
}
