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
     * Delete Appointment
     *
     * @remarks
     * <p>Use this endpoint to permanently <b>Delete</b> an appointment. Only appointments with a of "IN" status, initial, can be deleted. Past dated appointments cannot be deleted. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
     * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>
     */
    deleteConsumerV1AppointmentsId(req: operations.DeleteConsumerV1AppointmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConsumerV1AppointmentsIdResponse>;
    /**
     * Get Appointments
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
     */
    getConsumerV1Appointments(req: operations.GetConsumerV1AppointmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AppointmentsResponse>;
    /**
     * Get Custom Fields Labels
     *
     * @remarks
     * <p>Use this endpoint to return a locations <b>Appointment Booking Fields</b>. Appointment booking fields are stored with each Appointment record. They are used when you need additional information collected during your booking process. It is tied to an appointment/visit and will be stored in the appointment record. Use the field name, type, and length to determine how to update these field values when posting an appointment.</p>
     */
    getConsumerV1AppointmentsBookingfields(req: operations.GetConsumerV1AppointmentsBookingfieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AppointmentsBookingfieldsResponse>;
    /**
     * Get Custom Fields List
     *
     * @remarks
     * <p>Use this endpoint to return a locations <b>Appointment Custom Field</b> definitions. Appointment custom fields are stored with each appointment. They are used when the information collected during the booking is specific to a particular appointment/visit. The response will list the custom fields used (customField1 - 10), the field type (string, number, date, boolean) and the length of each one.</p>
     */
    getConsumerV1AppointmentsCustomfields(req: operations.GetConsumerV1AppointmentsCustomfieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AppointmentsCustomfieldsResponse>;
    /**
     * Get Appointment
     *
     * @remarks
     * <p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
     */
    getConsumerV1AppointmentsId(req: operations.GetConsumerV1AppointmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AppointmentsIdResponse>;
    /**
     * Create Appointment
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a new appointment. The appointment will be created with an "IN", Initial status. Posting an appointment with "IN" status requires minimal information and requires a "PUT book" call to complete the booking transaction, <i>PUT  /consumer /v1 /appointments /{id} /book</i>. Alternatively, you can post an appointment using the <b>completeBooking</b> option which completes the booking in one transaction, but it will require more data. The method you choose depends on your solutions workflow. </p>
     * <p>
     *   <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b></p>
     * <p>A valid <b>serviceId</b> is required. The serviceId provided must be valid for the location being booked. A valid serviceId is one that is scoped to a Primary Company Location or is associated with a Business Location</p>
     * <p>OPTIONAL FIELDS INCLUDE: </p>
     * <p>
     *   <b>locationId</b> - if not supplied, the appointment will be posted to the primary business location. If you support multiple location, we recommend always supplying the locationId. </p>
     * <p>
     *   <b>resourceId</b> - not required when posting with an "IN" status but is required when the appointment is booked. Use <i>GET /consumer/v1/resources</i> for a list of resources. </p>
     * <p>
     *   <b>customerId</b> - if supplied the name and email will be retrieved from the customer record. </p>
     * <p>
     *   <b>BookedBy</b> - if not supplied the email address of the booked appointment is used or the ip address if no email address is provided. BookedBy is used in the Appointment Audit trail which can be viewed in the appointment object.</p>
     * <p>
     *   <b>Location</b> - is a string value representing the location of the appointment. It provides no added functionality in OnSched and should not be confused with locationId.</p>
     * <p>
     *   <b>TimezoneName</b> - if used timezoneName must be in IANA format, <i>America/New_York</i>. This is the timezone the appointment was booked in. Populating this information can help later in situations where appointments are booked before a Daylight Savings change. If no timezoneName is supplied, the Business Locations timezone will be used.</p>
     * <p>
     *   <b>COMPLETE BOOKING:</b> This parameter provides a mechanism for immediate booking with the POST appointment endpoint. To complete the booking in one transaction, populate the <b>completeBooking</b> parameter with a "BK", booked or an "RS", reserved status and provide an (<b>email</b> and <b>name</b>) or a <b>customerId</b> in the post body. Doing so will book the appointment and send notifications all in one transaction. <b>Note:</b> "IN" can also be used as a completeBooking option to support payment flows. With the "IN" option, notifications are NOT sent.</p>
     * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
     */
    postConsumerV1Appointments(req: operations.PostConsumerV1AppointmentsRequest, config?: AxiosRequestConfig): Promise<operations.PostConsumerV1AppointmentsResponse>;
    /**
     * Book Appointment
     *
     * @remarks
     * <p>Use this endpoint to <b>Book</b> an appointment. Only appointments with an "IN" status, Initial, can be booked. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint. Other pertinent fields can also be updated at the time of booking by including them in the post body. <b>Note: If no name or email address was provided in the initial Post Appointment, it will be required in the post body.</b></p>
     * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
     */
    putConsumerV1AppointmentsIdBook(req: operations.PutConsumerV1AppointmentsIdBookRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdBookResponse>;
    /**
     * Cancel Appointment
     *
     * @remarks
     * <p>Use this endpoint to <b>Cancel</b> an appointment booking or reservation. Only appointments with a "BK", booked or "RS", reserved status can be cancelled. Past dated appointments cannot be cancelled. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>
     */
    putConsumerV1AppointmentsIdCancel(req: operations.PutConsumerV1AppointmentsIdCancelRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdCancelResponse>;
    /**
     * Confirm Appointment
     *
     * @remarks
     * <p>Use this endpoint to <b>Confirm</b> an appointment. This updates the boolean confirmed field to TRUE. <b>NOTE:</b> If the appointment status is set to "RS", Reserved, it also updates the status of the appointment to "BK", Booked. </p>
     * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>
     */
    putConsumerV1AppointmentsIdConfirm(req: operations.PutConsumerV1AppointmentsIdConfirmRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdConfirmResponse>;
    /**
     * Set NoShow Status
     *
     * @remarks
     * <p>Use this endpoint to change the status of an appointment from "BK", Booked to <b>"NS", NoShow</b>. This gives API consumers a way to internally track No Show appointments. It provides no added functionality in OnSched.</p>
     * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>
     */
    putConsumerV1AppointmentsIdNoshow(req: operations.PutConsumerV1AppointmentsIdNoshowRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdNoshowResponse>;
    /**
     * Reschedule Appointment
     *
     * @remarks
     * <p>Use this endpoint to <b>Reschedule</b> an appointment booking. Only appointments in "BK", booked status, can be Rescheduled. Past dated appointments cannot be rescheduled. A valid <b>appointment id</b> is required.</p>
     * <p>The <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b>.</p>
     * <p>The serviceId is optional. If changing the <b>serviceId</b>, the new service id's duration must match the original service's duration.</p>
     * <p>The resourceId is optional. If changing the <b>resourceId</b>, verify the availability of the new resource prior to rescheduling.</p>
     * <p>
     *   <b>IMPORTANT:</b> Always run availability before rescheduling an appointment to verify the timeslot is open and available for the new time, service and/or resource requested. This is the only way to assure the slot is available. You cannot reschedule an appointment to a different location. If necessary, you should cancel and then book an appointment in the other location.</p>
     * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>
     */
    putConsumerV1AppointmentsIdReschedule(req: operations.PutConsumerV1AppointmentsIdRescheduleRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdRescheduleResponse>;
    /**
     * Reserve Appointment
     *
     * @remarks
     * <p>Use this endpoint to <b>Reserve</b> an appointment. Only appointments with an "IN" status, Initial, can be reserved. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
     * <p>
     *   <b>NOTE: Reservations are different from Bookings as reservations are a two-step booking process that must be managed by the API consumer.</b> An appointment that is reserved is not completely booked until other business conditions have been met. For example, an appointment may be reserved if it is not yet assigned to a resource or until the customer or resource explicitly confirms it.</p>
     * <p>With reservations you have the ability to notify the customer of a reservation prior to officially booking and the workflow can be designed to indicate what conditions will need to be met in order to convert the reservation to a complete booking. A reservation converts to a complete booking when it is either Confirmed or Booked. </p>
     * <p>
     *   <b>IMPORTANT: A reserved appointment time will not be released, i.e., become available to others, until it is Cancelled. The booking timer is not used with reserved appointments.</b>
     * </p>
     * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
     */
    putConsumerV1AppointmentsIdReserve(req: operations.PutConsumerV1AppointmentsIdReserveRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdReserveResponse>;
}
