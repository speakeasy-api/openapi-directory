// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// OracleRestoreEstimateResult - Returns the estimate for a restore or export to the specified recovery point.
type OracleRestoreEstimateResult struct {
	// The estimated size, in bytes required to restore an Oracle database.
	BytesToRestore int64 `json:"bytesToRestore"`
}
