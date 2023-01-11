import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Appointments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSetupV1Appointments - Returns a list of appointments.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Appointments(req: operations.GetSetupV1AppointmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1AppointmentsResponse>;
    /**
     * getSetupV1AppointmentsId - Returns an appointment object.
     *
     * The result returned is a single appointment object. A valid id is required to find the appointment.
     *
     * Find appointment id's using the GET consumer/v1/appointments end point.
    **/
    getSetupV1AppointmentsId(req: operations.GetSetupV1AppointmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1AppointmentsIdResponse>;
    /**
     * putSetupV1AppointmentsIdReassignResourceResourceId - Reassigns the appointment to the supplied resourceId
     *
     * The result returned is a single appointment object. A valid id is required to find the appointment.
     *
     * Find appointment id's using the GET consumer/v1/appointments end point.
    **/
    putSetupV1AppointmentsIdReassignResourceResourceId(req: operations.PutSetupV1AppointmentsIdReassignResourceResourceIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1AppointmentsIdReassignResourceResourceIdResponse>;
}
