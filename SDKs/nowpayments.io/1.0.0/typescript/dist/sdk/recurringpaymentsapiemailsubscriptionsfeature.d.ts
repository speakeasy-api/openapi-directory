import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Streamline your workflows by sending payments to your customers on a regular basis with NOWPayments.
 *
 * @remarks
 * This feature involves creating a plan for payments and individual recurring payments for each user.
 * First you need to create a Recurring Payment plan:
 */
export declare class RecurringPaymentsAPIEmailSubscriptionsFeature {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete recurring payment
     *
     * @remarks
     * Completely removes a particular payment from the recurring payment plan.
     * You need to specify the payment plan id in the request.
     */
    deleteRecurringPayment(req: operations.DeleteRecurringPaymentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecurringPaymentResponse>;
    /**
     * Get many plans
     *
     * @remarks
     * This method allows you to obtain information about all the payment plans you’ve created.
     */
    getManyPlans(req: operations.GetManyPlansRequest, config?: AxiosRequestConfig): Promise<operations.GetManyPlansResponse>;
    /**
     * Get one plan
     *
     * @remarks
     * This method allows you to obtain information about your payment plan.
     * (you need to specify your payment plan id in the request).
     */
    getOnePlan(req: operations.GetOnePlanRequest, config?: AxiosRequestConfig): Promise<operations.GetOnePlanResponse>;
    /**
     * Update plan
     *
     * @remarks
     * This method allows you to add necessary changes to a created plan. They won’t affect users who have already paid; however, the changes will take effect when a new payment is to be made.
     */
    updatePlan(req: operations.UpdatePlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePlanResponse>;
}
