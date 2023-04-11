import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A metric is a quantitative result for a patient. For example, vital signs, lab results, etc. are all metrics.
 */
export declare class Metric {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create patient health metrics
     *
     * @remarks
     * Create one or more patient health metrics.
     *
     * Example for creating a patient health result with a patient specified using `meta.query` instead of `id`:
     *
     * ```JSON
     *   {
     *     "data": {
     *       "type": "patient_health_metric",
     *        "attributes": {
     *          "code": {
     *            "system": "LOINC",
     *            "value": "13457-7"
     *          },
     *          "type": "ldl_cholesterol",
     *          "occurred_at": "2017-03-14T11:00:57.000Z",
     *          "value": 121,
     *          "unit": "mg/dl"
     *       },
     *       "relationships": {
     *         "patient": {
     *           "data": {
     *             "type": "patient",
     *             "meta": {
     *               "query": {
     *                 "identifier": {
     *                   "system": "medical-record-number",
     *                   "value": "121212"
     *                 },
     *                 "organization": "58c4554710123c5c40dbab81"
     *               }
     *             }
     *           }
     *         }
     *       }
     *     }
     *   }
     * ```
     *
     */
    createPatientHealthMetric(req: shared.CreatePatientHealthMetricRequest, config?: AxiosRequestConfig): Promise<operations.CreatePatientHealthMetricResponse>;
    /**
     * Get a patient health metric
     *
     * @remarks
     * Get the plan summary for a patient.
     */
    fetchPatientHealthMetric(req: operations.FetchPatientHealthMetricRequest, config?: AxiosRequestConfig): Promise<operations.FetchPatientHealthMetricResponse>;
    /**
     * List patient health metrics
     *
     * @remarks
     * Get a list of patient health metrics.
     */
    fetchPatientHealthMetrics(req: operations.FetchPatientHealthMetricsRequest, config?: AxiosRequestConfig): Promise<operations.FetchPatientHealthMetricsResponse>;
}
