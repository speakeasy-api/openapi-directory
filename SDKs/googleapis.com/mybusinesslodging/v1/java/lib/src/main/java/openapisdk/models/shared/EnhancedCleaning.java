package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnhancedCleaning
 * Enhanced cleaning measures implemented by the hotel during COVID-19.
**/
public class EnhancedCleaning {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commercialGradeDisinfectantCleaning")
    public Boolean commercialGradeDisinfectantCleaning;
    public EnhancedCleaning withCommercialGradeDisinfectantCleaning(Boolean commercialGradeDisinfectantCleaning) {
        this.commercialGradeDisinfectantCleaning = commercialGradeDisinfectantCleaning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commercialGradeDisinfectantCleaningException")
    public EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum commercialGradeDisinfectantCleaningException;
    public EnhancedCleaning withCommercialGradeDisinfectantCleaningException(EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum commercialGradeDisinfectantCleaningException) {
        this.commercialGradeDisinfectantCleaningException = commercialGradeDisinfectantCleaningException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonAreasEnhancedCleaning")
    public Boolean commonAreasEnhancedCleaning;
    public EnhancedCleaning withCommonAreasEnhancedCleaning(Boolean commonAreasEnhancedCleaning) {
        this.commonAreasEnhancedCleaning = commonAreasEnhancedCleaning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonAreasEnhancedCleaningException")
    public EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum commonAreasEnhancedCleaningException;
    public EnhancedCleaning withCommonAreasEnhancedCleaningException(EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum commonAreasEnhancedCleaningException) {
        this.commonAreasEnhancedCleaningException = commonAreasEnhancedCleaningException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeesTrainedCleaningProcedures")
    public Boolean employeesTrainedCleaningProcedures;
    public EnhancedCleaning withEmployeesTrainedCleaningProcedures(Boolean employeesTrainedCleaningProcedures) {
        this.employeesTrainedCleaningProcedures = employeesTrainedCleaningProcedures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeesTrainedCleaningProceduresException")
    public EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum employeesTrainedCleaningProceduresException;
    public EnhancedCleaning withEmployeesTrainedCleaningProceduresException(EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum employeesTrainedCleaningProceduresException) {
        this.employeesTrainedCleaningProceduresException = employeesTrainedCleaningProceduresException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeesTrainedThoroughHandWashing")
    public Boolean employeesTrainedThoroughHandWashing;
    public EnhancedCleaning withEmployeesTrainedThoroughHandWashing(Boolean employeesTrainedThoroughHandWashing) {
        this.employeesTrainedThoroughHandWashing = employeesTrainedThoroughHandWashing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeesTrainedThoroughHandWashingException")
    public EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum employeesTrainedThoroughHandWashingException;
    public EnhancedCleaning withEmployeesTrainedThoroughHandWashingException(EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum employeesTrainedThoroughHandWashingException) {
        this.employeesTrainedThoroughHandWashingException = employeesTrainedThoroughHandWashingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeesWearProtectiveEquipment")
    public Boolean employeesWearProtectiveEquipment;
    public EnhancedCleaning withEmployeesWearProtectiveEquipment(Boolean employeesWearProtectiveEquipment) {
        this.employeesWearProtectiveEquipment = employeesWearProtectiveEquipment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeesWearProtectiveEquipmentException")
    public EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum employeesWearProtectiveEquipmentException;
    public EnhancedCleaning withEmployeesWearProtectiveEquipmentException(EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum employeesWearProtectiveEquipmentException) {
        this.employeesWearProtectiveEquipmentException = employeesWearProtectiveEquipmentException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestRoomsEnhancedCleaning")
    public Boolean guestRoomsEnhancedCleaning;
    public EnhancedCleaning withGuestRoomsEnhancedCleaning(Boolean guestRoomsEnhancedCleaning) {
        this.guestRoomsEnhancedCleaning = guestRoomsEnhancedCleaning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestRoomsEnhancedCleaningException")
    public EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum guestRoomsEnhancedCleaningException;
    public EnhancedCleaning withGuestRoomsEnhancedCleaningException(EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum guestRoomsEnhancedCleaningException) {
        this.guestRoomsEnhancedCleaningException = guestRoomsEnhancedCleaningException;
        return this;
    }
}