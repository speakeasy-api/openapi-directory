package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pets
 * Policies regarding guest-owned animals.
**/
public class Pets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catsAllowed")
    public Boolean catsAllowed;
    public Pets withCatsAllowed(Boolean catsAllowed) {
        this.catsAllowed = catsAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catsAllowedException")
    public PetsCatsAllowedExceptionEnum catsAllowedException;
    public Pets withCatsAllowedException(PetsCatsAllowedExceptionEnum catsAllowedException) {
        this.catsAllowedException = catsAllowedException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dogsAllowed")
    public Boolean dogsAllowed;
    public Pets withDogsAllowed(Boolean dogsAllowed) {
        this.dogsAllowed = dogsAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dogsAllowedException")
    public PetsDogsAllowedExceptionEnum dogsAllowedException;
    public Pets withDogsAllowedException(PetsDogsAllowedExceptionEnum dogsAllowedException) {
        this.dogsAllowedException = dogsAllowedException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("petsAllowed")
    public Boolean petsAllowed;
    public Pets withPetsAllowed(Boolean petsAllowed) {
        this.petsAllowed = petsAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("petsAllowedException")
    public PetsPetsAllowedExceptionEnum petsAllowedException;
    public Pets withPetsAllowedException(PetsPetsAllowedExceptionEnum petsAllowedException) {
        this.petsAllowedException = petsAllowedException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("petsAllowedFree")
    public Boolean petsAllowedFree;
    public Pets withPetsAllowedFree(Boolean petsAllowedFree) {
        this.petsAllowedFree = petsAllowedFree;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("petsAllowedFreeException")
    public PetsPetsAllowedFreeExceptionEnum petsAllowedFreeException;
    public Pets withPetsAllowedFreeException(PetsPetsAllowedFreeExceptionEnum petsAllowedFreeException) {
        this.petsAllowedFreeException = petsAllowedFreeException;
        return this;
    }
}