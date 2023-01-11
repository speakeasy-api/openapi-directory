package openapisdk.models.shared;



/**
 * State
 * State
**/
public class State {
    public String name;
    public State withName(String name) {
        this.name = name;
        return this;
    }
    public String stateCode;
    public State withStateCode(String stateCode) {
        this.stateCode = stateCode;
        return this;
    }
}