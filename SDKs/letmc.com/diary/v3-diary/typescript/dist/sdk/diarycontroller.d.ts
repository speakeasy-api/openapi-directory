import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DiaryController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Submit appointment feedback
     */
    diaryControllerAddFeedbackForm(req: operations.DiaryControllerAddFeedbackFormRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerAddFeedbackFormResponse>;
    /**
     * Submit appointment feedback
     */
    diaryControllerAddFeedbackJson(req: operations.DiaryControllerAddFeedbackJsonRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerAddFeedbackJsonResponse>;
    /**
     * Submit appointment feedback
     */
    diaryControllerAddFeedbackRaw(req: operations.DiaryControllerAddFeedbackRawRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerAddFeedbackRawResponse>;
    /**
     * Cancel an existing appointment using its unique identifier
     */
    diaryControllerCancelAppointment(req: operations.DiaryControllerCancelAppointmentRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerCancelAppointmentResponse>;
    /**
     * Delete an existing appointment using its unique identifier
     */
    diaryControllerDeleteAppointment(req: operations.DiaryControllerDeleteAppointmentRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerDeleteAppointmentResponse>;
    /**
     * Get a list of all available allocations for a date + 7 days for a specified appointment type
     */
    diaryControllerGetAllocations(req: operations.DiaryControllerGetAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerGetAllocationsResponse>;
    /**
     * Get an appointment by ID
     */
    diaryControllerGetAppointment(req: operations.DiaryControllerGetAppointmentRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerGetAppointmentResponse>;
    /**
     * A collection of all diary appointment types
     */
    diaryControllerGetAppointmentTypes(req: operations.DiaryControllerGetAppointmentTypesRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerGetAppointmentTypesResponse>;
    /**
     * A collection of diary appointments linked to a company filtered between specific dates and by appointment type
     */
    diaryControllerGetAppointmentsBetweenDates(req: operations.DiaryControllerGetAppointmentsBetweenDatesRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerGetAppointmentsBetweenDatesResponse>;
    /**
     * Retrieves all recurring appointments:-
     */
    diaryControllerGetRecurringAppointments(req: operations.DiaryControllerGetRecurringAppointmentsRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerGetRecurringAppointmentsResponse>;
    /**
     * Post an appointment into a valid diary allocation
     */
    diaryControllerPostAppointmentForm(req: operations.DiaryControllerPostAppointmentFormRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerPostAppointmentFormResponse>;
    /**
     * Post an appointment into a valid diary allocation
     */
    diaryControllerPostAppointmentJson(req: operations.DiaryControllerPostAppointmentJsonRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerPostAppointmentJsonResponse>;
    /**
     * Post an appointment into a valid diary allocation
     */
    diaryControllerPostAppointmentRaw(req: operations.DiaryControllerPostAppointmentRawRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerPostAppointmentRawResponse>;
    /**
     * Update an existing appointment using its unique identifier
     */
    diaryControllerPutAppointmentForm(req: operations.DiaryControllerPutAppointmentFormRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerPutAppointmentFormResponse>;
    /**
     * Update an existing appointment using its unique identifier
     */
    diaryControllerPutAppointmentJson(req: operations.DiaryControllerPutAppointmentJsonRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerPutAppointmentJsonResponse>;
    /**
     * Update an existing appointment using its unique identifier
     */
    diaryControllerPutAppointmentRaw(req: operations.DiaryControllerPutAppointmentRawRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerPutAppointmentRawResponse>;
    /**
     * Match Guest Parameters with existing applicants
     */
    diaryControllerSearchGuest(req: operations.DiaryControllerSearchGuestRequest, config?: AxiosRequestConfig): Promise<operations.DiaryControllerSearchGuestResponse>;
}
