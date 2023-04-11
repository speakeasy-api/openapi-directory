import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Appointments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Appointments
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
     */
    getSetupV1Appointments(req: operations.GetSetupV1AppointmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1AppointmentsResponse>;
    /**
     * Get Appointment
     *
     * @remarks
     * <p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. Find appointment id's by using the <i>GET /setup /v1 /appointments</i> endpoint.</p>
     */
    getSetupV1AppointmentsId(req: operations.GetSetupV1AppointmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1AppointmentsIdResponse>;
    /**
     * Reassign Appointment
     *
     * @remarks
     * <p>Use this endpoint to <b>Reassign</b> an appointment from one resource to another. The result returned is a single appointment that was reassigned to the target resource. A valid <b>appointment id</b> and <b>resource id</b> is required. Find appointment id's by using the <i>GET /setup/v1/appointments</i> endpoint, find resource id's by using the <i>GET  /setup /v1 /resources</i> endpoint.</p>
     */
    putSetupV1AppointmentsIdReassignResourceResourceId(req: operations.PutSetupV1AppointmentsIdReassignResourceResourceIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1AppointmentsIdReassignResourceResourceIdResponse>;
}
