package openapisdk.models.shared;



/**
 * ActionResponse
 * The object encapsulating the output of an operation affecting the PATROL Agent.
**/
public class ActionResponse {
    public String pslOutput;
    public ActionResponse withPslOutput(String pslOutput) {
        this.pslOutput = pslOutput;
        return this;
    }
}